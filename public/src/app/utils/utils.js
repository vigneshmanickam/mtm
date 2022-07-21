export const getParamValue = (paramName) => {
    const url = new URL(location.href);
    return url.searchParams.get(paramName);
}
