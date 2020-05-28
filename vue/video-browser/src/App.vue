<template>
	
	<div class="container">
		<SearchBar @termChange="onTermChange"></SearchBar> <!-- v-on: same as @ -->
		<div class="row">
			<VideoDetail :video="selectedVideo" /> <!-- v-bind: is same as : -->
			<VideoList @videoSelect="onVideoSelect" :videos="videos" />  
			

		</div>

	</div>

</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
// const API_KEY='AIzaSyBI_sSSJO2TVwX8w0gjgmsybu_PQp2usc4';
const API_KEY='AIzaSyBifuC1BlkMN7YyKteVlCJc3ykoJ5fifAM';

	export default {
		name: 'App',
		components: {
			SearchBar,
			VideoList,
			VideoDetail
		},
		data() {
			return {
				videos: [], selectedVideo: null
			};
		},
		methods: {
			onVideoSelect(video) {
				this.selectedVideo = video;
			},
			onTermChange(searchTerm) {
				axios.get('https://www.googleapis.com/youtube/v3/search', {

					params: {
						key: API_KEY, 
						type: 'video',
						part: 'snippet',
						q: searchTerm
					}
				}).then(response => {
					this.videos = response.data.items;
				});

			}


		}

	};

</script>