package fi.gosu.ika.stats.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Exception for trying to delete spy reports
 *
 * @author Joppe151617
 * @since 0.1.0
 */
@ResponseStatus(value = HttpStatus.FORBIDDEN, reason = "Vakooja raportteja ei voi poistaa!")
public class SpyReportDeleteForbiddenException extends RuntimeException {
}
