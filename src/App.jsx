import "./App.css";

//1. Given an array of objects, write a React component to display the total price of smartphones.

const SmartPhones = ({ smartphones }) => {
  const totalPrice = smartphones.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
      <h2>Total Price of Smartphones</h2>
      <p>$ {totalPrice.toFixed(2)}</p>
    </div>
  );
};

//2. Given an array of objects, write a React component to display the average rating of hotels.

const Hotels = ({ hotels }) => {
  const avgRating =
    hotels.reduce((acc, curr) => acc + curr.rating, 0) / hotels.length;

  return (
    <div>
      <h2>Average rating of Hotels</h2>
      <p>{avgRating.toFixed(2)}</p>
    </div>
  );
};

//3. Given an array of objects, write a React component to display the total number of podcast listeners.

const Podcast = ({ podcasts }) => {
  const totalListeners = podcasts.reduce(
    (acc, curr) => acc + curr.listeners,
    0,
  );

  return (
    <div>
      <h2>Total Podcast Listeners</h2>
      <p>{totalListeners}</p>
    </div>
  );
};

//4. Given an array of objects, write a React component to display the total retweets of all the tweets.

const Tweets = ({ tweets }) => {
  const totalRetweets = tweets.reduce((acc, curr) => acc + curr.retweets, 0);

  return (
    <div>
      <h2>Total Retweets</h2>
      <p>{totalRetweets}</p>
    </div>
  );
};

//5. Given an array of objects, write a React component to display the total content word count of all articles.

const Articles = ({ articles }) => {
  const wordCount = articles.reduce(
    (acc, curr) => acc + curr.content.split(" ").length,
    0
  );

  return (
    <div>
      <h2>Word Count</h2>
      <p>{wordCount}</p>
    </div>
  );
};

//6. Given an array of objects, write a React component to display the total number of likes of "User1".

const Posts = ({ posts }) => {
  const totalLikes = posts.reduce((acc, curr) => {
    if (curr.user === "User1") {
      return acc + curr.likes;
    }
    return acc;
  }, 0);

  return (
    <div>
      <h2>Number of Likes of User 1</h2>
      <p>{totalLikes}</p>
    </div>
  );
};
export default function App() {
  const smartphones = [
    { id: 1, brand: "Samsung", price: 799.99 },
    { id: 2, brand: "iPhone", price: 999.99 },
    { id: 3, brand: "Google Pixel", price: 899.99 },
  ];

  const hotels = [
    { id: 1, name: "Luxury Hotel", rating: 4.8 },
    { id: 2, name: "Budget Inn", rating: 3.5 },
    { id: 3, name: "Resort Paradise", rating: 4.2 },
  ];

  const podcasts = [
    { id: 1, title: "Tech Talk", listeners: 5000 },
    { id: 2, title: "Science Insights", listeners: 3000 },
    { id: 3, title: "Comedy Hour", listeners: 7000 },
  ];

  const tweets = [
    { id: 1, content: "Tweet 1", retweets: 20 },
    { id: 2, content: "Tweet 2", retweets: 15 },
    { id: 3, content: "Tweet 3", retweets: 30 },
  ];

  const articles = [
    { id: 1, title: "Article 1", content: "Content 1" },
    { id: 2, title: "Article 2", content: "Content 2" },
    { id: 3, title: "Article 3", content: "Content 3" },
  ];

  const posts = [
    { id: 1, title: "Post 1", content: "Content 1", likes: 10, user: "User1" },
    { id: 2, title: "Post 2", content: "Content 2", likes: 5, user: "User2" },
    { id: 3, title: "Post 3", content: "Content 3", likes: 7, user: "User1" },
  ];

  return (
    <main>
      <h1>IR2.3_HW1</h1>
      <SmartPhones smartphones={smartphones} />
      <hr />
      <Hotels hotels={hotels} />
      <hr />
      <Podcast podcasts={podcasts} />
      <hr />
      <Tweets tweets={tweets} />
      <hr />
      <Articles articles={articles} />
      <hr />
      <Posts posts={posts} />
    </main>
  );
}
