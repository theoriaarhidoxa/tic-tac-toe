export interface ISettings {
    name: string;
    width: number;
    starter: string;
    score: string;
}

export interface ISettingsProps {
    data: ISettings;
    onCancel: () => void;
    onSubmit: (data: ISettings) => void;
}

export interface ISingleItem {
    id: number;
    disabled: boolean;
    userChoice: boolean;
    machineChoice: boolean;
    animated: boolean;
}
