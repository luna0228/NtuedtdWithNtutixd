// export default function Navigation() {

//     return (
//         <div className="navigationBox">
//             <nav aria-label="Page navigation">
//                 <ul className="pagination">
//                     <li className="page-item">
//                         <a className="page-link" href="#" aria-label="Previous">
//                             <span aria-hidden="true">&laquo;</span>
//                         </a>
//                     </li>
//                     <li className="page-item"><a className="page-link" href="#">1</a></li>
//                     <li className="page-item"><a className="page-link" href="#">2</a></li>
//                     <li className="page-item"><a className="page-link" href="#">3</a></li>
//                     <li className="page-item">
//                         <a className="page-link" href="#" aria-label="Next">
//                             <span aria-hidden="true">&raquo;</span>
//                         </a>
//                     </li>
//                 </ul>
//             </nav>
//         </div>


//     )
// }

// 以下是耕締11.02
import { Pagination } from 'antd';
export default function CustomPagination({current,onChange,total}) {  // 将你的组件重命名为 CustomPagination
    return (
        <div className="PaginationBox">
          <Pagination
            defaultCurrent={current}  // 默認的當前頁數
            onChange={onChange} //頁數變化時的回調函數
            total={total}            // 總數據庫
            className="customPagination"  // 应用自定义的 CSS 类
          />
        </div>
    );
}
