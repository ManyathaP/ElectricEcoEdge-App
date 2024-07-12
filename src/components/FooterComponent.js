import React from 'react'

const FooterComponent = () => {
    const footerStyle = {
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%',
        textAlign: 'center',
        padding: '10px 0',
        background: 'linear-gradient(90deg, #007BFF 0%, #314767 100%)',
        color: 'white'
    };

    return (
        <div>
            <footer style={footerStyle}>
                <span>All Rights Reserved 2034 @mANYATHA</span>
            </footer>
        </div>
    )
}

export default FooterComponent