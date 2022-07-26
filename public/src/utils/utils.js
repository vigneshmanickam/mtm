export const getParamValue = (paramName) => {
    const url = new URL(window.location.href);
    return url.searchParams.get(paramName);
}
