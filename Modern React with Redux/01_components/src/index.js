import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4 color="red">Are you sure about that?</h4>
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Memelord"
                    postedAt="Today at 6:00PM"
                    comment="Very nice!"
                    image={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Danklord"
                    postedAt="Today at 2:00PM"
                    comment="Totally agree!"
                    image={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Dootlord"
                    postedAt="Yesterday at 5:00PM"
                    comment="I think so!"
                    image={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'))
