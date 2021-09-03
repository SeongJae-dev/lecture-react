import React, {useEffect, useState} from "react";
import store from "../Store.js";
import List from "./List.js";


const HistoryList = ({onClick}) => {

    const [historyList, setHistoryList] = useState([]);


    const fetch = () => {
        const historyList = store.getHistoryList();
        setHistoryList(historyList);
    }

    const handleClickRemove = (keyword) => {
        store.removeHistory(keyword);
        fetch();
    }

    useEffect(() => {
        fetch();
    }, []);

    return (
        <List
            hasDate
            data={historyList}
            onClick={onClick}
            onRemove={(keyword) => handleClickRemove(keyword)}/>
    );
};

export default HistoryList;
//
// export default class HistoryList extends React.Component {
//     constructor() {
//         super();
//
//         this.state = {
//             historyList: [],
//         };
//     }
//
//     componentDidMount() {
//         this.fetch();
//     }
//
//     fetch() {
//         const historyList = store.getHistoryList();
//         this.setState({historyList});
//     }
//
//     handleClickRemove(keyword) {
//         store.removeHistory(keyword);
//         this.fetch();
//     }
//
//     render() {
//         const {onClick} = this.props;
//         const {historyList} = this.state;
//
//         return (
//             <List
//                 hasDate
//                 data={historyList}
//                 onClick={onClick}
//                 onRemove={(keyword) => this.handleClickRemove(keyword)}/>
//
//         );
//     }
// }
