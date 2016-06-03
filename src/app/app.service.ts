export default class AppService {

    public static $inject = ['$q'];

    constructor($q) {
        $q.when().then(function() {
            console.log('AppService is running');
        });
    }

    getData() {
        return [777, 888];
    }
}
