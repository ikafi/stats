package fi.gosu.ika.stats.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Exception for trying to delete spy reports
 *
 * Created by Joppe151617 on 30.4.2017.
 */
@ResponseStatus(value = HttpStatus.FORBIDDEN, reason = "Vakooja raportteja ei voi poistaa!")
public class SpyReportDeleteForbiddenException extends RuntimeException {
}
