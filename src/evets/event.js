// const now = new Date()

// new Date( año_num, mes_num, dia_num 
// [, hor_num,min_num,seg_num,mils_num ] )

export const events =  [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2021, 7, 1, 0, 0, 0 ),
    end: new Date(2021, 7, 7, 0, 0, 0 ),
    user: {
      name : "Huguez"
    }
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2021, 6, 7),
    end: new Date(2021, 6, 10),
    user: {
      name : "Huguez"
    }
  },

  {
    id: 2,
    title: 'DTS STARTS',
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
    user: {
      name : "Huguez"
    }
  },

  {
    id: 3,
    title: 'DTS ENDS',
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 13, 0, 0, 0),
    user: {
      name : "Huguez"
    }
  },

  {
    id: 4,
    title: 'Some Event',
    start: new Date(2021, 6, 9, 0, 0, 0),
    end: new Date(2021, 6, 10, 0, 0, 0),
    user: {
      name : "Huguez"
    }
  },
  {
    id: 5,
    title: 'Conference',
    start: new Date(2021, 6, 11),
    end: new Date(2021, 6, 13),
    desc: 'Big conference for important people',
    user: {
      name : "Huguez"
    }
  },
  {
    id: 6,
    title: 'Meeting',
    start: new Date(2021, 6, 12, 10, 30, 0, 0),
    end: new Date(2021, 6, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
    user: {
      name : "Huguez"
    }
  },
  {
    id: 7,
    title: 'Lunch',
    start: new Date(2021, 6, 12, 12, 0, 0, 0),
    end: new Date(2021, 6, 12, 13, 0, 0, 0),
    desc: 'Power lunch',
    user: {
      name : "Huguez"
    }
  },
  {
    id: 8,
    title: 'Meeting',
    start: new Date(2021, 6, 12, 14, 0, 0, 0),
    end: new Date(2021, 6, 12, 15, 0, 0, 0),
    user: {
      name : "Huguez"
    }
  },
  {
    id: 9,
    title: 'Happy Hour',
    start: new Date(2021, 6, 12, 17, 0, 0, 0),
    end: new Date(2021, 6, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day',
    user: {
      name : "Huguez"
    }
  },
  {
    id: 10,
    title: 'Dinner',
    start: new Date(2021, 6, 12, 20, 0, 0, 0),
    end: new Date(2021, 6, 12, 21, 0, 0, 0),
    user: {
      name : "Huguez"
    }
  },
  {
    id: 11,
    title: 'Planning Meeting with Paige',
    start: new Date(2021, 6, 13, 8, 0, 0),
    end: new Date(2021, 6, 13, 10, 30, 0),
    user: {
      name : "Huguez"
    }
  },
  {
    id: 11.1,
    title: 'Inconvenient Conference Call',
    start: new Date(2021, 6, 13, 9, 30, 0),
    end: new Date(2021, 6, 13, 12, 0, 0),
    user: {
      name : "Huguez"
    }
  },
  {
    id: 11.2,
    title: "Project Kickoff - Lou's Shoes",
    start: new Date(2021, 6, 13, 11, 30, 0),
    end: new Date(2021, 6, 13, 14, 0, 0),
    user: {
      name : "Huguez"
    }
  },
  {
    id: 11.3,
    title: 'Quote Follow-up - Tea by Tina',
    start: new Date(2021, 6, 13, 15, 30, 0),
    end: new Date(2021, 6, 13, 16, 0, 0),
    user: {
      name : "Huguez"
    }
  },
  {
    id: 12,
    title: 'Late Night Event',
    start: new Date(2021, 6, 17, 19, 30, 0),
    end: new Date(2021, 6, 18, 2, 0, 0),
    user: {
      name : "Huguez"
    }
  },
]