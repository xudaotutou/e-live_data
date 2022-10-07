const search = function(arr = [], search) {
    if (search) {
        let keyword = (search + '').toLowerCase();
        let keys = key.split(' ');
        return [...arr].filter(o => {
            return (o[keys[1]] + "").toLowerCase().includes(keyword) || (o[keys[0]] + "").toLowerCase().includes(keyword);
        });
    } else {
        return [...arr];
    }
};

export default search