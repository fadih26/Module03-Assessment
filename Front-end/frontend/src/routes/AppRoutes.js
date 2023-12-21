import Home from '../pages/Home/Home';
import Dashboard from '../pages/Dashboard/Dashboard';
import NotFound from '../pages/NotFound/NotFound'
import Article from '../pages/Article/Article';
import { Route, Routes } from 'react-router-dom';


const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/dashboard/" element={<Dashboard />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;