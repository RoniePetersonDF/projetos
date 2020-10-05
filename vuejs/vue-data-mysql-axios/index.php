<!DOCTYPE html>
<html lang="pt-Br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Insert Update Delete with Vue.js</title>

    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <style>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }
    </style>
</head>
<body>
    <div id="cruddApp" class="container">
        <br>
        <h3>Add, Update, Delete or Remove Data From Mysql using Vue.Js</h3>
        <br>
        <div class="row">
        <input type="button" value="Add" class="btn btn-success btn-xs">
        </div>
        <div class="row">
            <table class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Firts Name</th>
                        <th>Last Name</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                
                </tbody>
            </table>
        </div>
    </div>

    <script>
        let app = new Vue({
            el: '#cruddApp',
            data: {
                allData: ''
            },
            methods: {
                fetchAllData:function(){
                    axios.post('action.php', {
                        action:'fetchall'
                    }).then(function(response){
                        app.allData = response.data;
                    });
                },
            },
            created:function(){
                this.fetchAllData();
            },
        })
    </script>
</body>
</html>