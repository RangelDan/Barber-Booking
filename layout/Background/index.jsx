import { css, cx } from '@emotion/css'

export default function Background({ children, img }) {
    const services = css`
        background: url(${img}) no-repeat;
        background-size: 100% 100%;
        height: 100vh;
        width: 100%
        
    `
    return (
        <div className={cx(services)}>
            {children}
        </div>
    )
}