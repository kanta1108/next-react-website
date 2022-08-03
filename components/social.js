import styles from 'styles/social.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faFacebook,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'

export default function Social({ iconSize = 'initial' }) {
    return (
        <ul className={styles.list} style={{ '--icon-size': iconSize }}>
            <li>
                <a href='https://twitter.com/'>
                    <FontAwesomeIcon icon={faTwitter} />
                    <span className='sr-only'>Twitter</span>
                </a>
            </li>
            <li>
                <a href='https://facebook.com/'>
                    <FontAwesomeIcon icon={faFacebook} />
                    <span className='sr-only'>Facebook</span>
                </a>
            </li>
            <li>
                <a>
                    <FontAwesomeIcon icon={faInstagram} />
                    <span className='sr-only'>Instagram</span>
                </a>
            </li>
        </ul>
    )
}