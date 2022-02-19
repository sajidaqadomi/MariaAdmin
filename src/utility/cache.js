const prefix = 'cache'
export const store = (key, value) => {
    localStorage.setItem(`${prefix}${key}`, value)

}

export const get = (key) => {
    const item = localStorage.getItem(`${prefix}${key}`)

    if (!item) return null
    return item


}

export const clear = () => {
    localStorage.clear()
}