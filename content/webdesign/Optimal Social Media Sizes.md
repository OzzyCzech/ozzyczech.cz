---
title: Optimal Social Media Sizes
date: 2020-12-08
tags: [webdesign]
---

# Optimal Social Media Sizes

### Facebook

* Facebook profile picture size: [180×180](#img/180/180/FacebookProfilePicture.png)
* Facebook cover photo size: [820×462](#img/820/462/FacebookCoverPhoto.jpg)
* Facebook link image size: [1200×630](#img/1200/630/FacebookImageLink.jpg)
* Facebook image post size: [1200×630](#img/1200/630/FacebookImagePost.jpg)
* Facebook event image size: [1920×1080](#img/1920/1080/FacebookEventImage.jpg)
* Facebook group cover image size: [1640×922](#img/1640/922/FacebookGroupCoverImage.png)

##### Facebook Ads

* Facebook ad size: [1200×628](#img/1200/628/FacebookAd.png)
* Facebook Story ad size: [1080×1920](#img/1200/628/FacebookStoryAd.png)
* Facebook messenger image ad size: [1200×628](#img/1200/628/FacebookMessengerAd.png)

##### Facebook Video

* Facebook video ad size: 1280×720
* Facebook video size: 1280×720
* Maximum Facebook video length: 240 minutes

### Instagram

* Instagram profile picture size: [110×110](#img/110/110/InstagramPrifileImage.png)
* Instagram photo sizes: [1080×1080](#img/1080/1080/InstagramSquare.jpg) (square), [1080×566](#img/1080/566/InstagramSquare.jpg) (landscape), 1080×1350 (portrait)
* Instagram photo thumbnails: [161×161](#img/161/161/InstagramPhotoThumbnails.jpg)
* Instagram Stories size: [1080×1920](#img/1080/1920/InstagramStories.jpg)

##### Instagram Ads

* Instagram ads size: [1080×566](#img/1080/566/InstagramAdsLandscape.png) pixels (landscape), [1080×1080](#img/1080/1080/InstagramAdsSquare.png) pixels (square)
* Minimum Instagram image ad size: 500 pixels wide

##### Instagram video

* Minimum Instagram video sizes: 600×600 (square), 600×315 (landscape), 600×750 (portrait), 600×700 (Carousel video dimensions)
* Maximum Instagram video length: 60 seconds
* Instagram IGTV video size: 1080×1920

### Twitter

* Twitter profile picture size: [400×400](#img/400/400/TwitterProfileImage.png) ([PNG](#img/400/400/TwitterProfileImage.png), [JPG](#img/400/400/TwitterProfileImage.jpg) or [GIF](#img/400/400/TwitterProfile.gif)) up to 2 MB
* Twitter header size: [1500×500](#img/1500/500/TwitterHeaderImage.png)
* Twitter post image size: [1024×512](#img/1024/512/TwitterPostImage.png)
* Twitter card image size: [1200×628](#img/1200/628/TwitterCard.jpg)
* Twitter ad size (image): [800×428](#img/800/428/TwitterAd.png)
* Tweet sharing two images: [700×800](#img/700/800/Twitter_two_images.png) (both images)
* Tweet sharing three images: 
 * Left image: [700×800 pixels](#img/700/800/Twitter_three_images_left.png) 
 * Right images: [1200×686 pixels](#img/1200/686/Twitter_three_images_right.png)
* Tweet sharing four images: [1200×600 pixels](#img/1200/600/Twitter_four_images.png) (per image)
* Maximum file size of **5 MB** for photos, and **5 MB for animated GIFs** on mobile and **15 MB on web**.

##### Twitter video

* Twitter video size: 720×720 (square), 1280×720 (landscape), 720×1280 (portrait)
* Twitter ad size (video): 720×720 (square), 1280×720 (landscape), 720×1280 (portrait)
* Maximum Twitter video length: 140 seconds


### LinkedIn

##### Company pages:

* LinkedIn company logo size: [300×300](#img/300/300/LinkedInCompanyLogo.png)
* LinkedIn cover photo size: [1536×768](#img/1536/768/LinkedInCoverPhoto.png)
* LinkedIn Dynamic Ads size: [100×100](#img/100/100/LinkedInAdsCompanyLogo.png) (company logo)
* LinkedIn Sponsored Content image size: [1200×627](#img/1200/627/LinkedInSponsoredContentImage.png)
* LinkedIn Hero image size: [1128×376](#img/1128/376/LinkedInHeroImage.png)
* LinkedIn Business Banner image: [646×220](#img/646/220/LinkedInBusinessBanner.png)

##### Personal pages:

* LinkedIn profile picture size: [400×400](#img/400/400/LinkedInProfilePicture.jpg)
* LinkedIn background photo size: [1584×396](#img/1584/396/LinkedInBackgroundPhoto.jpg)
* LinkedIn post image size: [1200×1200](#img/1200/1200/LinkedInImagePost-desktop.jpg) (desktop) [1200×628](#img/1200/628/LinkedInImagePost-mobile.jpg) (mobile)
* LinkedIn link post size: [1200×628](#img/1200/628/LinkedInPostImage.jpg)
* LinkedIn video size: 256×144 (minimum) to 4096×2304 (maximum)
* Maximum LinkedIn video length: 10 minutes


### YouTube 

* YouTube Channel cover picture: [2560×1440](#img/2560/1440/YouTubeChannelCoverPictureDesktop.jpg) pixels (desktop) and [1546×423](#img/1546/423/YouTubeChannelCoverPictureSmartphones.jpg) pixels (smartphones)
* YouTube Display ads: 300×250
* YouTube Overlay ads: 480×60
* YouTube Companion banner ads: [300×250](#img/300/250/YouTubeCompanionBanner.png) pixels
* YouTube Skippable video ads length: 6 – 20 seconds
* YouTube Non-skippable video ads length: 12 seconds to 3 minutes (30 seconds is recommended)
* YouTube Bumper video ads length: 6 seconds
* YouTube Standard video: 1280×760 pixels

### TikTok

* Tik Tok Video length: 1080×1920, maximum 15 seconds recommended.
* Tik Tok Profile photo [200×200](#img/200/200/TikTokProfilePhoto.png)
* Profile Picture: [180×180 pixels](#img/180/180/Facebook_profile_picture.jpg) (Displays 170×170 on Desktop)
* Cover Photo: [820×312 pixels](#img/820/312/Facebook_cover_photo.jpg)

<script>
function placeholder(width, height, text) {
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect fill="#ddd" width="${width}" height="${height}"/><text fill="rgba(0,0,0,0.5)" font-family="sans-serif" font-size="30" dy="10.5" font-weight="bold" x="50%" y="50%" text-anchor="middle">${ text ? text : width + '×' + height}</text></svg>`;
}

document.querySelectorAll('a[href^="#img/"]').forEach(link => {
	const href = new URL(link.href.replace('#img/', ''))
	const [width, height, name] = href.pathname.substring(1).split('/')
	
	link.download = name;

	const svg = placeholder(width, height);
	const type = name.split('.').pop();

	let blob = new Blob([svg], {type: 'image/svg+xml;charset=utf-8'});
	let url = URL.createObjectURL(blob);

	let image = new Image();
		image.onload = () => {
			// create canvas
			let canvas = document.createElement('canvas');
			canvas.width = width;
			canvas.height = height;

			// convert canvas
			let context = canvas.getContext('2d');
			context.drawImage(image, 0, 0, width, height);
			link.href = canvas.toDataURL('image/' + type);
	};
	image.src = url;
});
</script>