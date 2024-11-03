import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IMG_URL } from '../hooks/useEnv';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Context } from '../context/Context';


export default function MovieCard({ item }) {
	const { likedList, setLikedList } = React.useContext(Context)

	function handleLikedBtnClick() {
		const likeData = likedList.findIndex(value => value.id == item.id)
		if (likeData == -1) {
			setLikedList([...likedList, item])
		} else {
			likedList.splice(likeData, 1)
			setLikedList([...likedList])
		}
	}

	return (
		<Card className='!bg-[#ffffff3d] text-white border-[1.5px] border-white !rounded-[15px]' sx={{ maxWidth: 345 }}>
			<CardHeader
				avatar={<Avatar aria-label="recipe"><CardMedia className='!w-[50px] !h-[50px]' component="img" width={50} height={50} image={`${IMG_URL}/${item.backdrop_path}`} alt={item.title} /></Avatar>}
				title={<h4 className='!text-white line-clamp-1'>{item.title}</h4>}
				subheader={<span className='!text-white'>{item.release_date}</span>}
			/>
			<CardMedia className='!h-[350px]' component="img" image={`${IMG_URL}/${item.poster_path}`} alt="img" />
			<CardContent><Typography className='!line-clamp-3 !text-white' variant="body2" sx={{ color: 'text.secondary' }}>{item.overview}</Typography></CardContent>
			<CardActions disableSpacing>
				<IconButton onClick={handleLikedBtnClick} aria-label="liked"><FavoriteIcon className='text-white' /></IconButton>
				<IconButton aria-label="saved"><BookmarkIcon className='text-white' /></IconButton>
			</CardActions>
		</Card>
	);
}
