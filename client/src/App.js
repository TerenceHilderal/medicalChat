import './App.css';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelListContainer, ChannelContainer, Auth } from './components';

const apiKey = '8k7davqtsqnf';

const client = StreamChat.getInstance(apiKey);

const authToken = false;

const App = () => {
	if (!authToken) return <Auth />;
	return (
		<div className='app__wrapper'>
			<Chat client={client} theme='theme light'>
				<ChannelListContainer />
				<ChannelContainer />
			</Chat>
		</div>
	);
};

export default App;
