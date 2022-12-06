import React, {FC, useState} from 'react';
import './Settings.scss';
import {ISettings, ISettingsProps} from "../interfaces";

const Settings: FC<ISettingsProps> = ({data, onCancel, onSubmit}) => {

    const [settingsData, setSettingsData] = useState({...data});
    const sizes = [3, 4, 5];
    const [error, setError] = useState(false);

    const closeEverything = () => {
        onCancel();
    };

    const sendSomething = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(settingsData);
        onCancel();
    };

    const editName = (e: React.ChangeEvent) => {
        const name = (e.target as HTMLInputElement).value;
        setError(!name.length);
        setSettingsData({...settingsData, name});
    };

    const resetData = () => {
        setSettingsData({
            name: 'Player1',
            width: 3,
            starter: 'user',
        } as ISettings);
    };

    return (
        <>
            <div className='overlay' onClick={closeEverything}/>
            <div className='settings'>
                <form className='settings__form' onSubmit={sendSomething}>
                    <div className='settings__form-item'>
                        <label>Ваше имя</label>
                        <input type='text' className={!settingsData.name ? 'error' : ''} value={settingsData.name}
                               onChange={editName}/>
                    </div>
                    <div className='settings__form-item'>
                        <label>Размеры поля</label>
                        <select value={settingsData.width} onChange={e => setSettingsData({...settingsData, width: +e.target.value})}>
                            {sizes.map(el => {
                                return (
                                    <option key={el} value={el}>{el}x{el}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className='settings__form-item'>
                        <label>Кто начнёт?</label>
                        <select value={settingsData.starter}
                                onChange={e => setSettingsData({...settingsData, starter: e.target.value})}>
                            <option value='user'>{settingsData.name}</option>
                            <option value='AI'>Компьютер</option>
                        </select>
                    </div>
                    <div className='settings__form-item'>
                        <input type='button' value='Сбросить' onClick={resetData}/>
                        <input type='submit' value='Сохранить' disabled={error}/>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Settings;
