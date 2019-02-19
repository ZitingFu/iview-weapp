Page({
    data: {
        current: 'tab1',
        tabs: [
        	{
        		key: 'tab1',
        		title: '附近',
        		content: 'Content of tab 1',
        	},
        	{
        		key: 'tab2',
        		title: '关注',
        		content: 'Content of tab 2',
        	},
        	{
        		key: 'tab3',
        		title: '最新',
        		content: 'Content of tab 3',
        	},
            {
                key: 'tab4',
                title: '关注',
                content: 'Content of tab 2',
            },
            {
                key: 'tab5',
                title: '我不知道',
                content: 'Content of tab 3',
            },
        ],
    },
    onChange(e) {
        console.log('onChange', e)
        this.setData({
            current: e.detail.key,
        })
    },
    // 点击
    onTabsChange(e) {
        console.log('onTabsChange', e)
        const { key } = e.detail
        const index = this.data.tabs.map((n) => n.key).indexOf(key)

        this.setData({
            key,
            index,
        })
    },
    // 滑动
    onSwiperChange(e) {
    	console.log('onSwiperChange', e)
    	const { current: index, source } = e.detail
    	const { key } = this.data.tabs[index]
    	if (!!source) {
	    	this.setData({
	    		key,
	    		index,
	    	})
    	}
    },
})