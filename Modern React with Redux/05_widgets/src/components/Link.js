import React from 'react';

const Link = ({ href, className, children }) => {
    const onClick = (event) => {
        // To enable Ctrl+Click new tab opening
        if (event.ctrlKey || event.metaKey) return;

        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <a onClick={onClick} href={href} className={className}>
            {children}
        </a>
    );
}

export default Link;
