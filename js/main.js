const soccerPosts = [
  {
    id: 1,
    title: "The Importance of Ball Control in Soccer",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1qAN9n.img?w=768&h=512&m=6&x=506&y=172&s=41&d=41s",
    description:
      "Mastering ball control is crucial for every soccer player, enabling better possession and creating more chances.",
    fullDetail:
      "Ball control is a fundamental skill in soccer that allows players to maintain possession, make accurate passes, and create scoring opportunities. A player with excellent ball control can maneuver around opponents, deliver precise passes, and execute strategic plays. This skill is particularly important in tight situations, where space and time are limited.",
    htmlLink: "./html/post1.html",
  },
  {
    id: 2,
    title: "Top 5 Soccer Dribbling Techniques",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/633b6c847b304297ba78b209/Paris-Saint-Germain-v-OGC-Nice---Ligue-1-Uber-Eats/0x0.jpg?format=jpg&crop=3059,2038,x130,y114,safe&height=2038&width=3059 ",
    description:
      "Learn the top dribbling techniques used by the best soccer players to beat defenders.",
    fullDetail:
      "Dribbling is an essential skill for any soccer player looking to advance the ball past defenders. Techniques like the step-over, scissors, and body feints are used by world-class players to create space. A successful dribbler needs not only skill but also vision to pick the right moments to take on defenders.",
    htmlLink: "./html/post2.html",
  },
  {
    id: 3,
    title: "Understanding Soccer Formations: A Guide",
    image:
      "https://static01.nyt.com/images/2020/10/08/sports/00soccer-rules-1a/00soccer-rules-1a-videoSixteenByNineJumbo1600.jpg",
    description:
      "A detailed look into different soccer formations and their strategic purposes on the field.",
    fullDetail:
      "Formations are the backbone of any soccer team's strategy. Common formations like the 4-4-2, 4-3-3, and 3-5-2 offer unique tactical advantages, whether you're looking to control the midfield, bolster defense, or emphasize attacking plays. Each formation has specific roles for each player, and understanding these can make a big difference in both offensive and defensive situations.",
    htmlLink: "./html/post3.html",
  },
  {
    id: 4,
    title: "The Role of the Goalkeeper in Modern Soccer",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/221126143352-weston-mckennie.jpg?c=16x9&q=w_800,c_fill",
    description:
      "How goalkeepers have evolved to play a more active role beyond stopping shots.",
    fullDetail:
      "In modern soccer, goalkeepers are no longer just shot-stoppers. They play an integral role in building attacks from the back, commanding the defense, and often acting as a sweeper-keeper to clear danger. This evolution requires keepers to possess excellent footwork, anticipation, and distribution skills.",
    htmlLink: "./html/post4.html",
  },
  {
    id: 5,
    title: "Top 10 Soccer Legends of All Time",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1qB03Y.img?w=750&h=500&m=6",
    description:
      "A look at the greatest soccer players in history and their incredible careers.",
    fullDetail:
      "From Pelé to Diego Maradona, and from Cristiano Ronaldo to Lionel Messi, the world of soccer has seen some extraordinary talents. These players not only showcased their exceptional skills on the field but also left an indelible mark on the history of the sport. Their legacies continue to inspire generations of fans and players alike.",
    htmlLink: "./html/post5.html",
  },
  {
    id: 6,
    title: "Nutrition Tips for Soccer Players",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1qYawB.img?w=768&h=512&m=6&x=171&y=177&s=470&d=63",
    description:
      "Learn how proper nutrition can enhance performance on the soccer field.",
    fullDetail:
      "A balanced diet is crucial for soccer players who need the energy, strength, and endurance to perform at their best. Carbohydrates for energy, proteins for muscle repair, and healthy fats for sustained performance are key. Hydration also plays a vital role, especially during intense training and matches. Understanding what and when to eat can make a huge difference in player performance.",
    htmlLink: "./html/post1.html",
  },
  {
    id: 7,
    title: "How to Improve Soccer Passing Accuracy",
    image:
      "https://yousport.vn/Media/Articles/220420052959054/Phu-kien-bong-da-B.jpg",
    description:
      "Accurate passing is essential to maintaining possession and building attacks in soccer.",
    fullDetail:
      "Passing accuracy is a critical aspect of a soccer game, as it enables smooth transitions between defense and attack. Players must master various types of passes – short, long, and through passes – and be able to adapt them to different game situations. Proper body positioning, vision, and timing are key factors that influence passing accuracy.",
    htmlLink: "./html/post2.html",
  },
  {
    id: 8,
    title: "Essential Soccer Equipment for Every Player",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1qXrgf.img?w=768&h=461&m=6",
    description:
      "From cleats to shin guards, here’s the essential gear every soccer player needs.",
    fullDetail:
      "Soccer players require a variety of equipment to perform safely and effectively. Essential gear includes cleats for traction, shin guards for protection, and the appropriate type of soccer ball for training. Additional accessories, like gloves for goalkeepers, compression wear, and hydration equipment, are also important for maintaining performance.",
    htmlLink: "./html/post3.html",
  },
  {
    id: 9,
    title: "Best Soccer Training Drills for Youth Players",
    image:
      "https://www.lacoliseum.com/wp-content/uploads/2019/07/Soccer-at-Coliseum.jpg",
    description:
      "Training drills designed to help young soccer players develop key skills.",
    fullDetail:
      "Youth soccer training focuses on building foundational skills like dribbling, passing, and shooting. Fun and engaging drills, such as cone dribbling, passing triangles, and small-sided games, allow young players to improve their technical abilities while developing a deeper understanding of teamwork and positioning. Training consistency is crucial to player development.",
    htmlLink: "./html/post4.html",
  },
  {
    id: 10,
    title: "Top 5 Mistakes to Avoid in Soccer Defense",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm8-Fm4-2V2gSPCs-BU3uuPeM79Tlff7xERw&s",
    description:
      "Avoid these common defensive mistakes to improve your soccer game.",
    fullDetail:
      "Playing good defense in soccer requires more than just physical ability; it demands focus and discipline. Common defensive mistakes include ball-watching, diving into tackles too early, and failing to communicate with teammates. Avoiding these errors and staying patient while defending will make it much harder for the opposition to break through.",
    htmlLink: "./html/post5.html",
  },
];
//   load danh sach post len giao dien
function renderSoccerPosts(postList) {
  // lay lai danh sach chua cac bai post
  const list = document.getElementById("list");
  for (let index = 0; index < postList.length; index++) {
    list.innerHTML += `<div class="col-lg-6 col-sm-12">
            <div class="card">
              <img
                src="${postList[index].image}"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">${postList[index].title}</h5>
                <p class="card-text text-truncate" style="max-width: 100%">
                  ${postList[index].description}
                </p>
                <a href="${postList[index].htmlLink}" data-id="${postList[index].id}"  class="btn btn-primary">chi tiết </a>
              </div>
            </div>
          </div>`;
  }
}
renderSoccerPosts(soccerPosts);



// **************************************************
// search
