import { useState, KeyboardEvent } from 'react';
import * as C from './styles';

export type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({onEnter}: Props) => {
    const [inputText, setInputText] = useState('');
    
    const handleKeyUp = (e: KeyboardEvent) => {
        let enterPressed = e.code === 'Enter' || 
                           e.code === 'NumpadEnter';

        if (enterPressed && inputText !== ''){
            onEnter(inputText);
            setInputText('');
        }    
    }

    return (
        <C.Container>
            <div className='image'>➕</div>
            <input 
                type="text"
                placeholder='Adicione uma tarefa'
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    );
}