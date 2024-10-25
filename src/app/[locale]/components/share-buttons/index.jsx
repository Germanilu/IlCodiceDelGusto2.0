'use client'
import './index.scss';

import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, LinkedinShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, WhatsappIcon, LinkedinIcon } from 'react-share';

const ShareButtons = ({ url, title }) => {
    return (
        <div className="share-buttons">
            <FacebookShareButton url={url} quote={title}>
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={url} title={title}>
                <TwitterIcon size={32} round />
            </TwitterShareButton>
            <WhatsappShareButton url={url} title={title}>
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <LinkedinShareButton url={url} title={title}>
                <LinkedinIcon size={32} round />
            </LinkedinShareButton>
        </div>

    )

};

export default ShareButtons;