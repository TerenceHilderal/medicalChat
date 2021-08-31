import './App.css';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelListContainer, ChannelContainer, Auth } from './components';

const apiKey = '8k7davqtsqnf';

const cookies = new Cookies();
const authToken = cookies.get('token');

const client = StreamChat.getInstance(apiKey);

if (authToken) {
	client.connectUser(
		{
			id: cookies.get('userId'),
			name: cookies.get('username'),
			fullName: cookies.get('fullName'),
			image: cookies.get('avatarURL'),
			hashedPassword: cookies.get('hashedPassword'),
			phoneNumber: cookies.get('phoneNumber'),
		},
		authToken,
	);
}

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
