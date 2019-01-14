(function(){
    console.log(module_id);
    console.log(user_id);
    $("#save-model").on('click',function(){

        saveprocedure();
        saveTqa();

    })
    //保存主流程
    function saveprocedure(){
        var inputnodeName = [];
        $("div[data-id$=Main]").each(function(index,val){
            var comment = $(this).find('input').get(0).value;
            console.log(comment)

            if(comment =='点击修改节点名' || comment =='请填写节点名' || comment ==''){
                this.parentNode.classList.add('shake','animated','warning');
            }
            inputnodeName.push(comment)
        })
        if(inputnodeName.indexOf('点击修改节点名')==-1 && inputnodeName.indexOf('请填写节点名')==-1 && inputnodeName.indexOf('')==-1){
            $('#save-success').modal('show')
        }else{
            $('#save-failed').modal('show')
        }

        var list = jsPlumb.getAllConnections();
        console.log(list)
        //var linedata = {}
        var sourceIdList = []
        var targetIdList = []
        //获取tqa信息
        var tqaNameList = []
        list.forEach(function(value,index,arr){
            //console.log(value)
            sourceIdList.push(value.sourceId)
            targetIdList.push(value.targetId)
            var label = value.getOverlay('connLabel')
            if(label){
                //console.log(label.label);
                var branchtqa = {}
                branchtqa[value.sourceId] = label.label;
                tqaNameList.push(branchtqa);
            }
        })
        //console.log(tqaNameList)
        //console.log(sourceIdList)
        //console.log(targetIdList)
        //获取页面节点
        var proceduredata = []
        //+++++++++++root部分+++++++++++++++++++
        var root = $("div[id$='Root']")
        var rootid = root.attr('id')
        var rootleft = root.position().left;
        var roottop = root.position().top;
        var nullArr = []
        console.log(rootid)
        console.log(sourceIdList.indexOf(rootid))
        console.log(nodeIdAndText)
        var root_any_nextNode = (sourceIdList.indexOf(rootid)!=-1)?[targetIdList[sourceIdList.indexOf(rootid)].slice(0,-5)]:nullArr;
        var rootText = nodeIdAndText[rootid.slice(0,-5)]?nodeIdAndText[rootid.slice(0,-5)]:'请填写节点文字内容！'

        var rootdata = {
            'vxmlId':module_id,
            'vxmlName':template_vxml,
            'id':rootid.slice(0,-5),
            'comment':'问候语',
            'type':'Root',
            'isInterrupt':'0',
            'top':roottop,
            'left':rootleft,
            'no_nextNode':nullArr,
            'yes_nextNode':nullArr,
            'branch_tqaName':nullArr,
            'branch_nextNode':nullArr,
            'any_nextNode':root_any_nextNode,
            
            'sounds_file':'/airecord/'+user_id+'/'+template_vxml+'/'+rootid.slice(0,-5)+'.wav',
            'sms':0,
            'text':rootText
        }
        proceduredata.push(rootdata)
        //+++++++++++++main部分+++++++++++++++++
        var mainobj = $('div[id$="Main"]');
        var keyoftqalist = []
        //tqaNameList:[{main_1-Main-branch: "q_4,q_5"},{main_1-Main-branch: "q_9"},{main_2-Main-branch: "q_4,q_5"}]
        tqaNameList.forEach(function(value,index,arr){
            console.log(value)
            var keyoftqa = Object.keys(value);
            strkeyoftqa = keyoftqa.join('')
            keyoftqalist.push(strkeyoftqa)
        })
        //keyoftqalist:["main_1-Main-branch", "main_1-Main-branch", "main_2-Main-branch"]
        console.log(keyoftqalist)
        console.log(template_vxml);
        mainobj.each(function(index,value){
            var mainid = $(this).attr('id');
            console.log(mainid) //branch_2-Main/main_1-Main,main_2-Main
            var mainleft = $(this).position().left;
            var maintop = $(this).position().top;
            var mainBranchName = mainid+'-branch';
            console.log(keyoftqalist)
            var indexOfTqaInTqaKey = keyoftqalist.indexOf(mainBranchName);
            console.log(indexOfTqaInTqaKey)
            //找到yesnobranch的下一个节点
            var no_nextNode = []
            var yes_nextNode = []
            var branch_nextNode = []
            var indexOfNoInSourceIdList = sourceIdList.indexOf(mainid+'-no');
            var indexOfYesInSourceIdList = sourceIdList.indexOf(mainid+'-yes');
            var indexOfBranchInSourceIdList = sourceIdList.indexOf(mainid+'-branch')

            if(indexOfNoInSourceIdList !==-1){
                no_nextNode.push(targetIdList[indexOfNoInSourceIdList].slice(0,-5)) 
            }
            if(indexOfYesInSourceIdList !==-1){
                yes_nextNode.push(targetIdList[indexOfYesInSourceIdList].slice(0,-5))
            }
            if(indexOfBranchInSourceIdList !==-1){
                sourceIdList.forEach(function(value,index,arr){
                    if(mainBranchName == value){
                        branch_nextNode.push(targetIdList[index].slice(0,-5))
                    }
                })
            }            
            //branch tqa的处理
            var branchTqaList = []
            if(indexOfTqaInTqaKey != -1){
                tqaNameList.forEach(function(value,index,arr){  //value形式：{main_1-Main-branch: "q_4,q_5"}
                    for(var key in value){
                        if(key == mainBranchName){
                            console.log(key)
                            console.log(value[key].split(','))
                            branchTqaList.push(value[key].split(',')) //branchTqaList形式：[["q_4","q_5"],["q_9"]]
                        }
                    }
                })
            }
            console.log(mainid)
            console.log(branchTqaList)
            console.log(branch_nextNode)
            var comment = $(this).find('input')[0].value;
            var mainText = nodeIdAndText[mainid.slice(0,-5)]?nodeIdAndText[mainid.slice(0,-5)]:'请填写节点文字内容!'         
            console.log(comment)
            
            var maindata = {
                'vxmlId':module_id,
                'vxmlName':template_vxml,
                'id':mainid.slice(0,-5),
                'comment':comment,
                'type':'Main',
                'isInterrupt':'0',
                'top':maintop,
                'left':mainleft,
                'no_nextNode':no_nextNode,
                'yes_nextNode':yes_nextNode,
                'branch_tqaName':branchTqaList,
                'branch_nextNode':branch_nextNode,
                'any_nextNode':nullArr,
                'nodeRepeat1':procedureIdAndTextAndRecordFile[mainid.slice(0,-5)+'-repeat-1'],
                'nodeRepeat2':procedureIdAndTextAndRecordFile[mainid.slice(0,-5)+'-repeat-2'],
                'nodeRepeat3':procedureIdAndTextAndRecordFile[mainid.slice(0,-5)+'-repeat-3'],
                'sounds_file':'/airecord/'+user_id+'/'+template_vxml+'/'+mainid.slice(0,-5)+'.wav',
                'sms':0,
                'text':mainText           
            }
            console.log('--------------------------');
            console.log(maindata.id);
            console.log(clickNodeIdForAreaText);
            console.log(maindata.nodeRepeat1);
            console.log(maindata.nodeRepeat2);
            console.log(maindata.nodeRepeat3);
            console.log('--------------------------');
            console.log(maintop,mainleft)
            proceduredata.push(maindata);
        })
        //++++++++++++++Exit部分+++++++++++++++++++
        console.log($('div[id$="Exit"]').attr('id'))
        var exitobj = $('div[id$="Exit"]');
        exitobj.each(function(index,value){
            var exitleft = $(this).position().left;
            var exittop = $(this).position().top;
            var exitid = $(this).attr('id')
            var exitText = nodeIdAndText[exitid.slice(0,-5)]?nodeIdAndText[exitid.slice(0,-5)]:'请填写节点文字内容!'
            var exitdata = {
                'vxmlId':module_id,
                'vxmlName':template_vxml,
                'id':exitid.slice(0,-5),
                'comment':'结束语',
                'type':'Exit',
                'isInterrupt':'0',
                'top':exittop,
                'left':exitleft,
                'no_nextNode':nullArr,
                'yes_nextNode':nullArr,
                'branch_tqaName':nullArr,
                'branch_nextNode':nullArr,
                'any_nextNode':nullArr,
                'sounds_file':'/airecord/'+user_id+'/'+template_vxml+'/'+exitid.slice(0,-5)+'.wav',
                'sms':0,
                'text':exitText
            }
            proceduredata.push(exitdata)
        })
        console.log(proceduredata)

        $.ajax({
            url:'saveProcedureData',
            dataType:'json',
            type:'POST',
            data:{proceduredata:proceduredata},
            
            success:function(msg){
                console.log(msg)
            }

        })
    }
    //保存tqa,包括repeat的
    function saveTqa(){
        console.log(tqaIdAndText);
        console.log(tqaRepeatIdAndTextAndRecordFile)
        $.ajax({
            url:'saveTqaData',
            dataType:'json',
            type:'POST',
            data:{
                'module_id':module_id,
                'tqaIdAndText':tqaIdAndText,
                'tqaRepeatIdAndTextAndRecordFile':tqaRepeatIdAndTextAndRecordFile,
                'vxmlName':template_vxml,
                'enableInterrupt':0,
                'whetherHangup':0,
                'tqaType':0,
                'generalVxmlId':null,
                'tqaComment':null,

            },
            success:function(msg){
                console.log(msg)
            }
        })
    }
})()