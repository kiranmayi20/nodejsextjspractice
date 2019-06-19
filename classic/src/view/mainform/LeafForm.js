Ext.define('MyApp.view.mainform.LeafForm', {
    extend: 'Ext.form.Panel',
    xtype: 'leafform',
  
    items: [{
      xtype: 'displayfield',
      value: 'This is a leaf'
    }, {
      xtype: 'checkbox',
      boxLabel: 'Do you want to make it as root?',
      listeners: {
        change: function(val) {
  
          if (val && val.getValue() == true) {
            this.up('leafform').add({
              xtype: 'rootform'
            })
          } else {
            var rootForm = this.up('leafform').items.items[2];
            this.up('leafform').remove(rootForm);
          }
        }
      }
    }]
  });