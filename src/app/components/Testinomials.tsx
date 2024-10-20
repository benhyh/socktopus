import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/Marquee";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "MrBeast",
    username: "@mrbeast",
    body: "These socks are so amazing, I'm giving away 10,000 pairs to my subscribers! Your feet will thank you for this beastly comfort!",
    img: "https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_400x400.jpg",
  },
  {
    name: "Kai Cenat",
    username: "@kaicenat",
    body: "Yo, these socks are straight fire! Streaming for 24 hours straight and my feet still feel fresh. No cap, best socks ever!",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/57/Kai_Cenat.png",
  },
  {
    name: "Jeff Bezos",
    username: "@jeffbezos",
    body: "I've delivered millions of packages, but nothing compares to how these socks deliver comfort. They're prime comfort, guaranteed!",
    img: "/users/jeff.png",
  },
  {
    name: "Dwayne Johnson",
    username: "@therock",
    body: "Can you smell what these socks are cookin'? They're tough enough for leg day and soft enough to make you feel like you're walking on The People's Cloud!",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPXMnkkeHJbP6BRE8zMuaJ4BYhbj0cAxetA&s",
  },
  {
    name: "John Cena",
    username: "@johncena",
    body: "You can't see me, but you can definitely see how comfortable I am in these socks. They're the real champs in my wardrobe!",
    img: "https://pbs.twimg.com/profile_images/839539770384662528/2DkQOk3r_400x400.jpg",
  },
  {
    name: "Duke Dennis",
    username: "@dukedennis",
    body: "These socks got me feeling like I just hit Legend in 2K. Comfort level: 99. Swag level: Maxed out. GG to all other socks!",
    img: "https://i.redd.it/duke-dennis-ppl-thirst-all-over-him-v0-6lczb4eftanb1.jpg?width=828&format=pjpg&auto=webp&s=a7d6ede16b31f8a6fa4c697802ba7b49d0b45157",
  },
  {
    name: "Elon Musk",
    username: "@elonmusk",
    body: "These socks are out of this world! They're so comfortable, I'm considering using them as the official footwear for Mars colonization. #SocksX",
    img: "/users/elon.png",
  },
  {
    name: "Bill Gates",
    username: "@billgates",
    body: "I've seen the future of footwear, and it's these socks. They're so innovative, I'm wondering if they're powered by Microsoft!",
    img: "users/bill.png",
  },
  {
    name: "Warren Buffet",
    username: "@warrenbuffet",
    body: "The best investment I've made this year? These socks. The comfort dividends are off the charts. A true blue chip for your feet!",
    img: "users/buffett.png",
  },
  {
    name: "Max Verstappen",
    username: "@maxverstappen",
    body: "These socks are like the perfect pit stop for my feet. Quick to put on, long-lasting comfort, and they keep me ahead of the pack!",
    img: "https://img.redbull.com/images/c_crop,x_914,y_1637,h_3171,w_3171/c_fill,w_350,h_350/q_auto:low,f_auto/redbullcom/2022/5/5/esxtfazwc5k0xntwv20i/max-verstappen-profile-pic",
  },
  {
    name: "Nicki Minaj",
    username: "@nickiminaj",
    body: "These socks got me feelin' like a boss, walkin' with that extra sauce. So fly, so sick, got me rappin' 'bout my kicks!",
    img: "https://live.staticflickr.com/5185/5822841140_1c696dff5c_n.jpg",
  },
  {
    name: "Diddy",
    username: "@diddy",
    body: "Ain't no party like a Diddy party, just like these socks. Ain't no socks like these socks! #FreakOffSocks",
    img: "https://babynames.com/blogs/wp-content/uploads/2022/12/sean-combs-diddy-300x300.jpg",
  },
];

const firstRow = reviews.slice(0, 3);
const secondRow = reviews.slice(3, 6);
const thirdRow = reviews.slice(6, 9);
const fourthRow = reviews.slice(9, 12);
const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-full cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <div className="flex mt-2 gap-0.5">
        <Star className="h-4 w-4 text-purple-600 fill-purple-600" />
        <Star className="h-4 w-4 text-purple-600 fill-purple-600" />
        <Star className="h-4 w-4 text-purple-600 fill-purple-600" />
        <Star className="h-4 w-4 text-purple-600 fill-purple-600" />
        <Star className="h-4 w-4 text-purple-600 fill-purple-600" />
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex w-full h-[600px] flex-row items-center justify-center overflow-hidden md:shadow-xl">
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {thirdRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {fourthRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
}
