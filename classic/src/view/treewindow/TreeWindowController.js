Ext.define('MyApp.view.treewindow.TreeWindowController',{
    extend : 'Ext.app.ViewController',
    alias : 'controller.windowcontroller',
    onRootSelect : function(a,b,c) {
        this.lookupReference('leafroot').setHidden(false);
    },
    onTypeSelect : function() {
        this.lookupReference('addnewroot').setHidden(false);
    },
    onSubmit : function(a,b,c) {
        var treeView = this.getView().treeView,
         rootname = this.lookupReference('addnewroot').value,
         leafroot =  this.lookupReference('leafroot').value,
         view = this.getView(),
         combo = view.down('combobox'),
         treeNode = treeView.getRootNode();
         var isLeaf = leafroot == 'Leaf' ? true : false ; 
           var record = treeNode.findChild('text',combo.value,true);   
           record.appendChild({
             text : rootname,
             leaf : isLeaf
         });
           this.getView().close()
    }
 })