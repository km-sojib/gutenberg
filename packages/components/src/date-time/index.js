/**
 * External dependencies
 */
// Needed to initialise the default datepicker styles.
// See: https://github.com/airbnb/react-dates#initialize
import 'react-dates/initialize';

/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';
import { __, _x } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Button from '../button';
import { FocusReturnProvider } from '../index';
import { default as DatePicker } from './date';
import { default as TimePicker } from './time';

export { DatePicker, TimePicker };

export const DateTimePicker = ( { currentDate, is12Hour, onChange } ) => {
	const [ calendarHelpIsVisible, setCalendarHelpIsVisible ] = useState( false );
	const onClickDescriptionToggle = () => setCalendarHelpIsVisible( ! calendarHelpIsVisible );

	return (
		<FocusReturnProvider className="components-datetime">
			{ ! calendarHelpIsVisible && (
				<>
					<TimePicker
						currentTime={ currentDate }
						onChange={ onChange }
						is12Hour={ is12Hour }
					/>
					<DatePicker
						currentDate={ currentDate }
						onChange={ onChange }
					/>
				</>
			) }

			{ calendarHelpIsVisible && (
				<>
					<div className="components-datetime__calendar-help">
						<h4>{ __( 'Click to Select' ) }</h4>
						<ul>
							<li>{ __( 'Click the right or left arrows to select other months in the past or the future.' ) }</li>
							<li>{ __( 'Click the desired day to select it.' ) }</li>
						</ul>

						<h4>{ __( 'Navigating with a keyboard' ) }</h4>
						<ul>
							<li>
								<abbr aria-label={ _x( 'Enter', 'keyboard button' ) }>↵</abbr>
								{ ' ' /* JSX removes whitespace, but a space is required for screen readers. */ }
								<span>{ __( 'Select the date in focus.' ) }</span>
							</li>
							<li>
								<abbr aria-label={ __( 'Left and Right Arrows' ) }>←/→</abbr>
								{ ' ' /* JSX removes whitespace, but a space is required for screen readers. */ }
								{ __( 'Move backward (left) or forward (right) by one day.' ) }
							</li>
							<li>
								<abbr aria-label={ __( 'Up and Down Arrows' ) }>↑/↓</abbr>
								{ ' ' /* JSX removes whitespace, but a space is required for screen readers. */ }
								{ __( 'Move backward (up) or forward (down) by one week.' ) }
							</li>
							<li>
								<abbr aria-label={ __( 'Page Up and Page Down' ) }>{ __( 'PgUp/PgDn' ) }</abbr>
								{ ' ' /* JSX removes whitespace, but a space is required for screen readers. */ }
								{ __( 'Move backward (PgUp) or forward (PgDn) by one month.' ) }
							</li>
							<li>
								<abbr aria-label={ __( 'Home and End' ) }>{ __( 'Home/End' ) }</abbr>
								{ ' ' /* JSX removes whitespace, but a space is required for screen readers. */ }
								{ __( 'Go to the first (home) or last (end) day of a week.' ) }
							</li>
						</ul>

						<Button isSmall onClick={ onClickDescriptionToggle }>
							{ __( 'Close' ) }
						</Button>
					</div>
				</>
			) }

			{ ! calendarHelpIsVisible && (
				<Button
					className="components-datetime__date-help-button"
					isLink
					onClick={ onClickDescriptionToggle }
				>
					{ __( 'Calendar Help' ) }
				</Button>
			) }
		</FocusReturnProvider>
	);
};
