package fi.gosu.ika.stats.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Exception for trying to delete battle
 *
 * @author Ville Nupponen
 * @since 0.1.0
 */
@ResponseStatus(value = HttpStatus.FORBIDDEN, reason = "Taisteluita ei voi poistaa!")
public class BattleDeleteForbiddenException extends RuntimeException {
}
