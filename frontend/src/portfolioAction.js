// portfolioActions.js
import axios from 'axios';
import { HideLoading, SetPortfolioData, ShowLoading, ReloadData } from './redux/rootSlice';

export const fetchPortfolioData = () => async (dispatch) => {
  try {
    dispatch(ShowLoading(true));
    const res = await axios.get('/api/portfolio/get-portfolio-data');
    dispatch(SetPortfolioData(res.data));
    dispatch(HideLoading(true));
    dispatch(ReloadData(false));

  } catch (error) {
    console.log(error);
  }
};

export default fetchPortfolioData;