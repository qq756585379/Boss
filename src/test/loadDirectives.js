
(function(angular) {
    'use strict';
    angular.module('testApp.directives', [])
        .directive('autoLoad', function() {
            return {
                restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
                link: function($scope, iElm, iAttrs, controller) {

                    var page = 0;
                    var size = 10;
                    // dropload


                    $scope.loadMore=iElm.dropload({
                        scrollArea : window,
                        domUp : {
                            domClass   : 'dropload-up',
                            domRefresh : '<div class="dropload-refresh">↓下拉刷新-自定义内容</div>',
                            domUpdate  : '<div class="dropload-update">↑释放更新-自定义内容</div>',
                            domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中-自定义内容...</div>'
                        },
                        domDown : {
                            domClass   : 'dropload-down',
                            domRefresh : '<div class="dropload-refresh">↑上拉加载更多-自定义内容</div>',
                            domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中-自定义内容...</div>',
                            domNoData  : '<div class="dropload-noData">暂无数据-自定义内容</div>'
                        },
                        loadUpFn : function(me){

                            //$.ajax({
                            //    type: 'GET',
                            //    url: 'json/update.json',
                            //    dataType: 'json',
                            //    success: function(data){
                            //        var result = '';
                            //        for(var i = 0; i < data.lists.length; i++){
                            //            result +=   '<a class="item opacity" href="'+data.lists[i].link+'">'
                            //                +'<img src="'+data.lists[i].pic+'" alt="">'
                            //                +'<h3>'+data.lists[i].title+'</h3>'
                            //                +'<span class="date">'+data.lists[i].date+'</span>'
                            //                +'</a>';
                            //        }
                            //        // 为了测试，延迟1秒加载
                            //        setTimeout(function(){
                            //            $('.lists').html(result);
                            //            // 每次数据加载完，必须重置
                            //            me.resetload();
                            //            // 重置页数，重新获取loadDownFn的数据
                            //            page = 0;
                            //            // 解锁loadDownFn里锁定的情况
                            //            me.unlock();
                            //            me.noData(false);
                            //        },1000);
                            //    },
                            //    error: function(xhr, type){
                            //        alert('Ajax error!');
                            //        // 即使加载出错，也得重置
                            //        me.resetload();
                            //    }
                            //});
                        },
                        loadDownFn : function(me){
                            page++;
                            // 拼接HTML
                            var result = '';
                            //$.ajax({
                            //    type: 'GET',
                            //    url: 'http://ons.me/tools/dropload/json.php?page='+page+'&size='+size,
                            //    dataType: 'json',
                            //    success: function(data){
                            //        var arrLen = data.length;
                            //        if(arrLen > 0){
                            //            for(var i=0; i<arrLen; i++){
                            //                result +=   '<a class="item opacity" href="'+data[i].link+'">'
                            //                    +'<img src="'+data[i].pic+'" alt="">'
                            //                    +'<h3>'+data[i].title+'</h3>'
                            //                    +'<span class="date">'+data[i].date+'</span>'
                            //                    +'</a>';
                            //            }
                            //            // 如果没有数据
                            //        }else{
                            //            // 锁定
                            //            me.lock();
                            //            // 无数据
                            //            me.noData();
                            //        }
                            //        // 为了测试，延迟1秒加载
                            //        setTimeout(function(){
                            //            // 插入数据到页面，放到最后面
                            //            $('.lists').append(result);
                            //            // 每次数据插入，必须重置
                            //            me.resetload();
                            //        },1000);
                            //    },
                            //    error: function(xhr, type){
                            //        alert('Ajax error!');
                            //        // 即使加载出错，也得重置
                            //        me.resetload();
                            //    }
                            //});
                        },
                        threshold : 50
                    })();




                }
            };
        });
})(angular);
