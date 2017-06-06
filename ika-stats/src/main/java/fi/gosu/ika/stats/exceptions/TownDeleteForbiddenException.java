package fi.gosu.ika.stats.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Exception for trying to delete towns
 *
 * @author Joppe151617
 * @since 0.1.0
 */
@ResponseStatus(value = HttpStatus.FORBIDDEN, reason = "Kaupunkeja ei voi poistaa!")
public class TownDeleteForbiddenException extends RuntimeException {
}
