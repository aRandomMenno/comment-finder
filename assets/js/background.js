// background.js
browser.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.action === "set") {
        const fileType = request.fileType || 'html'; // Default to 'html' if fileType is not provided
        browser.action.setBadgeText({
            text: request.comments.length > 0? request.comments.length.toString() : '',
            tabId: sender.tab.id,
            title: `${fileType} Comments: ${request.comments.length}`
        });
        browser.action.setIcon({
            path: request.comments.length > 0? 'images/eye_open.png' : 'images/eye_closed.png',
            tabId: sender.tab.id
        });
    }
});
