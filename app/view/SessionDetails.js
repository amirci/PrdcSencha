Ext.define('Prdc.view.SessionDetails', {
	id:'SessionDetails',
	extend:'Ext.Panel',
	setData: function (data) {
		this.items.items[0].items.items[1].data = data;
		this.items.items[0].items.items[2].data = data;
		this.items.items[1].setData(data);
		if (data.starred !== true) {
			this.items.items[0].items.items[2].iconElement.replaceCls('favourate','star');
		} else {
			this.items.items[0].items.items[2].iconElement.replaceCls('star','favourate');
		}
	},
	config: {
	    styleHtmlContent: true,
		layout: 'card',
		items: [
			{
				xtype: 'toolbar',
				docked:'top',
				items:[
					{
						id: 'sessiondetailsback',
						xtype:'button',
						ui   : 'back',
						text:'back'
					},
					{
						id: 'sessionspeaker',
						xtype:'button',
						ui   : 'back',
						text:'speaker'
					},
					{ 
						id: 'star',
						docked:'right',
						iconCls:'star'
					}
				]
			}, 
			{
				xtype:'panel',
				scroll:'vertical',
				tpl:'<div class="details"><h4 class="session_title">{title}</h4><h6><span>Room: {room}</span><span> Time: {start} - {finish}</span></h6><div>{abstract}</div></div>'
			}
		]
		
	},
	initialize: function() {
		this.setScrollable(true);
	}
});
