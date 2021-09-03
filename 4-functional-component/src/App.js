import React, {createContext, useState} from "react";
import Header from "./components/Header.js";
import KeywordList from "./components/KeywordList.js";
import HistoryList from "./components/HistoryList.js";
import SearchForm from "./components/SearchForm.js";
import SearchResult from "./components/SearchResult.js";
import Tabs, {TabType} from "./components/Tabs.js";
import store from "./Store.js";


const App = (props) => {

    const [searchKeyword, setSearchKeyword] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [selectedTab, setSelectedTab] = useState(TabType.KEYWORD);


    const handleChangeInput = (searchKeyword) => {
        if (searchKeyword.length <= 0) {
            handleReset();
        }

        setSearchKeyword(searchKeyword);
    }

    const search = (searchKeyword) => {
        const searchResult = store.search(searchKeyword);

        setSearchResult(searchResult);
        setSearchKeyword(searchKeyword);
        setSubmitted(true);
    }

    const handleReset = () => {

        setSearchResult([]);
        setSearchKeyword("");
        setSubmitted(false);

    }

    return (
        <>
            <Header title="검색"/>
            <div className="container">
                <SearchForm
                    value={searchKeyword}
                    onChange={(value) => handleChangeInput(value)}
                    onSubmit={() => search(searchKeyword)}
                    onReset={() => handleReset()}
                />
                <div className="content">
                    {submitted ? (
                        <SearchResult data={searchResult}/>
                    ) : (
                        <>
                            <Tabs
                                selectedTab={selectedTab}
                                onChange={(selectedTab) => setSelectedTab(selectedTab)}
                            />
                            {selectedTab === TabType.KEYWORD && (
                                <KeywordList onClick={(keyword) => search(keyword)}/>
                            )}
                            {selectedTab === TabType.HISTORY && (
                                <HistoryList onClick={(keyword) => search(keyword)}/>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default App;

// export default class App extends React.Component {
//   constructor() {
//     super();
//
//     this.state = {
//       searchKeyword: "",
//       searchResult: [],
//       submitted: false,
//       selectedTab: TabType.KEYWORD,
//     };
//   }
//
//   handleChangeInput(searchKeyword) {
//     if (searchKeyword.length <= 0) {
//       this.handleReset();
//     }
//
//     this.setState({ searchKeyword });
//   }
//
//   search(searchKeyword) {
//     const searchResult = store.search(searchKeyword);
//     this.setState({
//       searchKeyword,
//       searchResult,
//       submitted: true,
//     });
//   }
//
//   handleReset() {
//     this.setState({
//       searchKeyword: "",
//       searchResult: [],
//       submitted: false,
//     });
//   }
//
//   render() {
//     const { searchKeyword, searchResult, submitted, selectedTab } = this.state;
//
//     return (
//       <>
//         <Header title="검색" />
//         <div className="container">
//           <SearchForm
//             value={searchKeyword}
//             onChange={(value) => this.handleChangeInput(value)}
//             onSubmit={() => this.search(searchKeyword)}
//             onReset={() => this.handleReset()}
//           />
//           <div className="content">
//             {submitted ? (
//               <SearchResult data={searchResult} />
//             ) : (
//               <>
//                 <Tabs
//                   selectedTab={selectedTab}
//                   onChange={(selectedTab) => this.setState({ selectedTab })}
//                 />
//                 {selectedTab === TabType.KEYWORD && (
//                   <KeywordList onClick={(keyword) => this.search(keyword)} />
//                 )}
//                 {selectedTab === TabType.HISTORY && (
//                   <HistoryList onClick={(keyword) => this.search(keyword)} />
//                 )}
//               </>
//             )}
//           </div>
//         </div>
//       </>
//     );
//   }
// }
