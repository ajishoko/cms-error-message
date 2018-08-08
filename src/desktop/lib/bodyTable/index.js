import moment from 'moment';

export function listData() {
    let listData = [
        '1', 
        moment(),
        '404',
        'Not Found'
    ];

    return listData.map(function(data) {
        return data;
    });

}