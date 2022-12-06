import './App.scss';
import React, {useState, useRef, useEffect, FC} from "react";
import Settings from "./components/Settings";
import {ISettings, ISingleItem} from "./interfaces";

// todo при build в продакшен css opacity в конце сбрасывается со '100%' на '1', поменять вручную


const App: FC = () => {
    const [userSettings, setUserSettings] = useState<ISettings>({
        name: localStorage.getItem('tttUserName') || 'Player1',
        width: Number(localStorage.getItem('tttWidth')) || 3,
        starter: localStorage.getItem('tttStarter') || 'user',
        score: localStorage.getItem('tttScore') || '0:0',
    });

    const [modalVisible, setModalVisible] = useState(!localStorage.getItem('tttUserName'));
    const [width] = useState(userSettings.width);
    const [machineTurn, setMachineTurn] = useState(false);
    const [items, setItems] = useState<ISingleItem[]>(new Array(Math.pow(width, 2)).fill({
        disabled: false,
        userChoice: false,
        machineChoice: false,
        animated: false
    }).map((el, i) => {
        return {...el, id: i};
    }));

    const [winner, setWinner] = useState('');
    const [reload, setReload] = useState(false);
    const [userActionsDisabled, setUserActionsDisabled] = useState(false);
    const [userScore, machineScore] = userSettings.score.split(':');


    const getWinningIndexes = (size: number) => {
        const res = [], dia1 = [0], dia2 = [size - 1];
        let count = 0;

        while (count < size * size) {
            const row = [];
            for (let i = 1; i <= size; i++) {
                row.push(count + i - 1);
            }
            res.push(row);
            count+=size;
        }

        count = 0;

        while (count < size) {
            const row = [];
            for (let i = 0; i < size * size; i+=size) {
                row.push(count + i);
            }
            res.push(row);
            count++;
        }

        for (let i = 0; i < size - 1; i++) {
            dia1.push(dia1[dia1.length - 1] + size + 1);
            dia2.push(dia2[dia2.length - 1] + size - 1);
        }
        res.push(dia1, dia2);
        return res;
    };


    const winningIndexes = getWinningIndexes(userSettings.width);

    const deck = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const w = (deck?.current?.childNodes[0] as HTMLElement).clientWidth;
        deck?.current?.childNodes.forEach(node => {
            (node as HTMLElement).style.height = w + 'px';
        });
    }, []);

    useEffect(() => {
        if (userSettings.starter === 'AI') {
            handleWinCheck();
        } else {
            if (items.filter(el => !el.userChoice).length < items.length) { // если убрать условие, нолики начнут первыми
                handleWinCheck();
            }
        }

    }, [items]);

    useEffect(() => {
        if (machineTurn) {
            setTimeout(() => {
                handleMachineTurn();
            }, 500);
        }
    }, [machineTurn]);

    const handlePlayerTurn = (e: React.MouseEvent, el: ISingleItem) => {
        if (el.userChoice || el.machineChoice) {
            return;
        }

        setUserActionsDisabled(true);
        setItems(items.map(item => {
            if (item.id === el.id) {
                return {...item, userChoice: true, disabled: true};
            }
            return item;
        }));
    };

    const handleMachineTurn = () => {
        const free = items.filter(el => !el.disabled).map(el => el.id);
        const index = Math.floor(Math.random() * free.length), selectedByMachine = free[index];

        setItems(items.map(item => {
            if (item.id === selectedByMachine) {
                return {...item, machineChoice: true, disabled: true};
            }
            return item;
        }));
        setUserActionsDisabled(false);
    };

    const handleWinCheck = () => {
        let checkSuccess: number[] = [];
        for (let i = 0; i < winningIndexes.length; i++) {
            const bunch = winningIndexes[i].map(el => items[el]);
            if (bunch.every(el => machineTurn ? el.machineChoice : el.userChoice)) {
                checkSuccess = [...winningIndexes[i]];
                break;
            }
        }
        if (!checkSuccess.length) {
            if (items.filter(el => el.disabled).length === items.length) {
                setTimeout(() => {
                    setWinner(`Ничья!`);
                    setReload(true);
                }, 500);
            }
            setMachineTurn(!machineTurn);
        } else {
            setTimeout(() => {
                setWinner(machineTurn ? 'Искусственный интеллект побеждает!' : `${userSettings.name} побеждает!`);
                const scoreStr = localStorage.getItem('tttScore') || userSettings.score;
                const scoreArr = scoreStr.split(':').map(el => +el);
                if (items[checkSuccess[0]].userChoice) {
                    scoreArr[0]++;
                } else {
                    scoreArr[1]++;
                }
                localStorage.setItem('tttScore', scoreArr.join(':'));
                setReload(true);
                setUserActionsDisabled(true);
                deck?.current?.childNodes.forEach((el, i) => {
                    (el as HTMLElement).classList.add(checkSuccess.includes(i) ? 'animated' : 'nonAnimated');
                });
            }, 500);
        }
    };

    const handleReload = () => {
        window.location.reload();
    };

    const handleModalClose = () => {
        setModalVisible(false);
    };

    const handleSettingsEdit = (value: ISettings) => {
        const {name, width, starter} = value;
        localStorage.setItem('tttUserName', name);
        setUserSettings({...userSettings, name});

        localStorage.setItem('tttWidth', width.toString());
        setUserSettings({...userSettings, width});

        localStorage.setItem('tttStarter', starter);
        setUserSettings({...userSettings, starter});
        window.location.reload();
    };

    const handleScoreReset = () => {
        localStorage.removeItem('tttScore');
        window.location.reload();
    };

    return (
        <>
            <div className='score'>
                <table>
                    <tbody>
                    <tr>
                        <th><span>{userSettings.name}</span></th>
                        <th>AI</th>
                    </tr>
                    <tr>
                        <td>{userScore}</td>
                        <td>{machineScore}</td>
                    </tr>
                    </tbody>
                </table>
                <button onClick={handleScoreReset}>Обнулить</button>
            </div>
            <p>Какое же портфолио без крестиков-ноликов!<br/> На базе этого <a
                href='http://www.bugi-verstki.ru/projects/tic-tac-toe/ttt.html' target='_blank'>ванильного прототипа</a>.
            </p>
            <div ref={deck} className={userActionsDisabled ? 'deck disabled' : 'deck'}>
                {items.map((el, i) => {
                    return (
                        <div onClick={e => handlePlayerTurn(e, el)} key={i} style={{width: 100 / width + '%'}}
                             className={el.userChoice ? 'deck__cell x' : el.machineChoice ? 'deck__cell o' : el.animated ? 'deck__cell animated' : 'deck__cell'}>
                            <i/></div>
                    );
                })}
            </div>
            {reload &&
            <div className="reloadLink"><h3>{winner}</h3><span onClick={handleReload}>Играть снова</span></div>}
            <span className='openSettings' onClick={() => setModalVisible(true)}/>
            {modalVisible && <Settings data={userSettings} onCancel={handleModalClose} onSubmit={handleSettingsEdit}/>}
        </>
    );
};

export default App;
