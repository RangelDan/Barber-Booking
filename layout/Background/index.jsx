import { css, cx } from '@emotion/css'

export default function Background({ children, img }) {
    const services = css`
        background: url(${img}) center/cover;
        height: 100vh;
        
    `
    return (
        <div className={cx(services)}>
            {children}
        </div>
    )
}