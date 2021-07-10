import React, {Component} from 'react';
import Top from '../images/closei.png';

class GoTop extends Component{
    state ={
        intervalId: 0,
        thePosition: false
    };

    componentDidMount() {
        document.addEventListener("scroll", () =>{
            if(window.scrollY > 170){
                this.setState({thePosition: true});
            }else{
                this.setState({thePosition: false});
            }
        });
        window.scrollTo(0,0);
    }

    onScrollStep = () =>{
        if(window.pageYOffset === 0){
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx)
    }

    scrollToTop = () =>{
        let intervalId = setInterval(this.onScrollStep, this.props.delayInMs);
        this.setState({intervalId})
    }

    renderGoTopIcon = () =>{
        if(this.state.thePosition){
            return (
                <>
                    <div className="move-up">
                       <span>
                            <i className="fas fa-angel-double-up fa-5x"
                                onClick={this.scrollToTop}
                            >

                            </i>
                       </span>
                      {/* <img src={Top} alt="" />*/}
                    </div>
                </>
            )
        }
    };
    render() {
        return <>{this.renderGoTopIcon()}</>
    }
}

export default GoTop;