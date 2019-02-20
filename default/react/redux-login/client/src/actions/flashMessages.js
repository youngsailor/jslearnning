export const addFlashMessage = (message) => {
    return{
        type:'ADD_FLASH_MESSAGE',
        message
    }
}
export const closeFlashMessage = (messageId) =>{
    console.log(messageId);
    return {
        type:'CLOSE_FLASH_MESSAGE',
        messageId
    }
}
