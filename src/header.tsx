//<button className="item selected" id="select-home">Home</button>
//<button className="item" id="select-projects">Projects</button>

export type SelectPageButton = {pageName: string, pageRef: JSX.Element, selected: boolean}

let getHeader = (pages: SelectPageButton[], onSelect: (pageRef: JSX.Element) => void) => (
    <div className="header-container">
        <h1 className="header">CyberBiology</h1>
        <div className="items">
            {
                pages.map(
                    e => <button 
                        className={e.selected ? "item selected" : "item" }
                        onClick={() => onSelect(e.pageRef)}
                    >
                        {e.pageName}
                    </button>
                )
            }
        </div>
    </div>
)

export {getHeader};