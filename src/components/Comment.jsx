import { Trash } from '@phosphor-icons/react';
import { ThumbsUp } from '@phosphor-icons/react';

import { Avatar } from './Avatar';

import { useState } from 'react';

import styles from './Comment.module.css'

export function Comment({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0);
    
    function handleLikeComment() {
        setLikeCount((state) => {
            return state+1;
        });
    }

    function handleDeleteComment() {
        onDeleteComment(content);
    }
    
    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false}
                src="http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4762515E0"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rivaldo de Oliveira</strong>

                            <time title='6 de novembro às 10:19' dateTime='2023-11-06 10:19:00'> Cerca de 1 hora atrás</time>
                        </div>

                        <button onMouseDown={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}