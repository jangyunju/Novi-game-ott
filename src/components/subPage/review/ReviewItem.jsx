import { FaStar, FaRegClock, FaHeart } from 'react-icons/fa';
// 1. 작성하신 스토어를 임포트합니다. (경로는 실제 위치에 맞게 수정해주세요)
import reviewListStore from '../../../store/sub/review';
import './style.css';

// ... 상단 임포트 생략

const ReviewItem = () => {
    const reviewList = reviewListStore((state) => state.reviewList);

    return (
        <section className="review-section">
            <div className="review-header">
                <div className="title-area">
                    <p>플레이어들의 솔직하고 진실한 후기를 읽어보아요</p>
                </div>
            </div>

            <ul className="review-list">
                {reviewList.map((game) => (
                    <li key={game.id} className="review-card">
                        <div className="card-top">
                            <img src={game.img} alt={game.title} />
                            <span className="category-badge">{game.tag1}</span>
                        </div>

                        <div className="card-bottom" style={{ background: game.background }}>
                            <div className="title-row">
                                <div className="title-row-top">
                                    <h3>{game.title}</h3>
                                    <span className="rating">
                                        {game.rate} <FaStar className="star-icon" />
                                    </span>
                                </div>
                                <p className="review-text">{game.desc}</p>
                            </div>

                            {/* 🛠️ 수정된 유저 정보 영역 */}
                            <div className="user-row">
                                <div className="user-profile">
                                    <img src={game.userAvatar} alt="유저" />
                                    <div className="user-info-text">
                                        {' '}
                                        {/* 텍스트를 묶어주는 박스 추가 */}
                                        <span className="user-name">{game.userName}</span>
                                        <div className="meta-info">
                                            <span className="time">
                                                <FaRegClock /> {game.time}
                                            </span>
                                            <span className="level">
                                                <img src={game.levelicon} alt="lv" /> {game.level}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ReviewItem;
