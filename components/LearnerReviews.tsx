import { ArrowUpRight, Quote } from 'lucide-react';

const reviews = [
  { name: 'Arun', course: 'ReactJS training', quote: 'I loved the ReactJS training! The live projects were challenging but very rewarding. A huge shoutout to the placement team.', initials: 'AR', color: 'violet' },
  { name: 'Rahul', course: 'Python course', quote: 'I was new to programming, but the Python course here made it so easy to understand. The instructors take the time to explain every concept clearly.', initials: 'RH', color: 'lime' },
  { name: 'Karthik', course: 'SQL & Data Analytics bootcamp', quote: 'The transition from non-tech to tech was smooth thanks to Karka. The SQL and Data Analytics bootcamp was comprehensive and practical.', initials: 'KA', color: 'blue' },
  { name: 'Sneha', course: 'Advanced Java & Spring Boot', quote: 'The depth of knowledge in the advanced Java and Spring Boot modules is impressive. It’s not just about coding; they teach you how to think like a software engineer.', initials: 'SN', color: 'pink' },
  { name: 'Sandeep', course: 'Interview preparation & placement support', quote: 'The mock interviews prepared me so well for the real thing. I cracked my first interview thanks to the rigorous training.', initials: 'SA', color: 'orange' },
  { name: 'Gabriel Samraj', course: 'UI/UX Design', quote: 'Karka’s UI/UX design course was a game-changer for me. The instructors are passionate and the curriculum is up-to-date with the latest design trends. I now feel confident in my ability to create stunning visuals that stand out.', initials: 'GS', color: 'mint' },
];

export default function LearnerReviews() {
  return (
    <section className="learner-reviews section-pad" id="learner-reviews" aria-labelledby="learner-reviews-title">
      <div className="shell">
        <div className="learner-reviews-heading">
          <div><span className="stories-eyebrow"><span className="stories-pulse" /> SIX LEARNER VOICES · COURSE-SPECIFIC FEEDBACK</span><h2 id="learner-reviews-title">Honest learning stories.<br /><em>Useful perspective.</em></h2></div>
          <div className="reviews-heading-aside"><p>Feedback excerpts from Karka’s supplied public website snapshot. Each card names the learner and the course or support area mentioned.</p><a className="stories-instagram-link" href="https://www.instagram.com/karka.ai/" target="_blank" rel="noopener noreferrer">More from @karka.ai <ArrowUpRight size={15} /></a></div>
        </div>
        <div className="learner-review-grid">
          {reviews.map((review, index) => (
            <article className={`learner-review-card review-accent-${review.color}`} key={review.name}>
              <div className="learner-review-top"><span className="review-quote-mark"><Quote size={18} /></span><span className="review-number"> 0{index + 1}</span></div>
              <blockquote>“{review.quote}”</blockquote>
              <div className="learner-review-bottom"><span className={`review-avatar review-avatar-${review.color}`}>{review.initials}</span><span className="review-identity"><strong>{review.name}</strong><small>{review.course}</small></span></div>
              <span className="review-card-orbit" aria-hidden="true" />
            </article>
          ))}
        </div>
        <p className="reviews-source-note">information(feedbacks) from the original website</p>
      </div>
    </section>
  );
}
