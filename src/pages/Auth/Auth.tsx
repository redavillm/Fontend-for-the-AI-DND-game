import styles from './Auth.module.css'

export const Auth = () => {
    return (
        <div>
            <h1 className={styles.title}>Хронинки Этельгарда</h1>
            <div className={styles.authForm}>
                <label htmlFor="username">Email/Логин</label>
                <input id="username" type="text" placeholder="Username" />
                <label htmlFor="password">Пароль</label>
                <input id="password" type="password" placeholder="Password" />
                <button type="submit">Войти</button>
            </div>
        </div>
    )
}