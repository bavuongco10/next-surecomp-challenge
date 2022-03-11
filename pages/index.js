import { useState, useEffect } from 'react';

import Layout from 'components/Layout';
import Stories from 'components/Stories/Stories';
import FeedItem from 'components/FeedItem/FeedItem';
import MoreModalItems from 'components/MoreModal';
import useUser from 'hooks/useUser';

function Home() {
  const { setLoginUser } = useUser();

  const [loginData, setLoginData] = useState(null);
  const [stories, setStories] = useState(null);
  const [feed] = useState(null);

  const updateLoginUser = (data) => {
    setLoginUser(data);
    setLoginData(data);
  };

  useEffect(() => {
    fetch('/api/loginUser')
      .then((response) => response.json())
      .then((data) => updateLoginUser(data));
  }, []);

  useEffect(() => {
    fetch('/api/loginUser')
      .then((response) => response.json())
      .then((data) => updateLoginUser(data));
  }, []);

  useEffect(() => {
    fetch('/api/stories')
      .then((response) => response.json())
      .then((data) => setStories(data));
  }, []);

  if (!loginData) return null;

  return (
    <Layout user={loginData}>
      <MoreModalItems />
      <div className="homepage-feed lg:mr-8 flex flex-col ">
        <Stories stories={stories} />
        {feed && feed.map((item) => <FeedItem data={item} key={item.pid} />)}
      </div>
    </Layout>
  );
}
export default Home;
