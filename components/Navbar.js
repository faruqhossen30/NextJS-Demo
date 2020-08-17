import Link from 'next/link'

const Navbar = ({ menus }) => {
    return (
        <div>
            <ul className="nav bg-secondary">
                {
                    menus.map((menu) => {
                        return (
                            <li className="nav-item" key={menu.ID}>
                                <Link href="/about">
                                    <a className="nav-link active">{menu.title}</a>
                                </Link>
                            </li>
                        )
                    })
                }
                

            </ul>
            <ul className="nav bg-secondary">
            <li className="nav-item" >
                    <Link href="/">
                        <a className="nav-link active">Home</a>
                    </Link>
                </li>
                <li className="nav-item" >
                    <Link href="/about">
                        <a className="nav-link active">About</a>
                    </Link>
                </li>
                <li className="nav-item" >
                    <Link href="/contact">
                        <a className="nav-link active">Contact</a>
                    </Link>
                </li>
                

            </ul>
        </div>
    );
};

export default Navbar;