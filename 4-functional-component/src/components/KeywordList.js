import React, {useEffect, useState} from "react";
import store from "../Store.js";
import List from "./List.js";


const KeywordList = ({onClick}) => {
    const [keywordList, setKeywordList] = useState([]);

    useEffect(() => {
        const keywordList = store.getKeywordList();
        setKeywordList(keywordList)
    }, [])

    return (
        <List
            hasIndex
            data={keywordList}
            onClick={onClick}
        />
    );
};

export default KeywordList;

// export default class KeywordList extends React.Component {
//     constructor() {
//         super();
//
//         this.state = {
//             keywordList: [],
//         };
//     }
//
//     componentDidMount() {
//         const keywordList = store.getKeywordList();
//         this.setState({keywordList});
//     }
//
//     render() {
//         const {onClick} = this.props;
//         const {keywordList} = this.state;
//
//         return <List hasIndex data={keywordList} onClick={onClick}/>;
//     }
// }
