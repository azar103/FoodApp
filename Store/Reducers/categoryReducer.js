const intialState = {
    categories: [{
        id: 1,
        url: 'https://assets.afcdn.com/recipe/20190529/93153_w420h344c1cx2220cy1728cxt0cyt0cxb4441cyb3456.jpg',
        name: 'Cookies',
        number: 4
    },
    {
        id: 2,
        url: 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/41/2048x1024/landscape-1507827432-beef-taco-boats-delish-1.jpg?resize=480:*',
        name: 'Mexican Food',
        number: 2
    },
    {
        id: 3,
        url: 'https://i.ndtvimg.com/i/2015-12/italian_625x350_41450863014.jpg?downsize=630:380&output-quality=70&output-format=webp',
        name: 'Italian Food',
        number: 3
    },
    {
        id: 4,
        url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=480:*',
        name: 'Smoothies',
        number: 1
    }
]
}

function setCategory(state = intialState, action){
    let nextState
    switch (action.type) {
        case 'GET_CATEGORY':
                nextState ={...state,
                categories: [...state.categories]
            }
            return nextState||state
            
    
        default:
            return state;
    }
}

export default setCategory